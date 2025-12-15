"use server";

import { redis } from "@/lib/db";

export const UpdateWaitlist = async (data) => {
  const waitlistKey = "revord-waitlist";
  const emailSetKey = "revord-waitlist:emails";

  try {
    if (!data || typeof data !== "object" || !data.email) {
      throw new Error("Invalid data format: email is required.");
    }

    const email = data.email.toLowerCase().trim();

    const isAlreadyMember = await redis.sismember(emailSetKey, email);

    if (isAlreadyMember) {
      return {
        success: true, // It's a success from the user's perspective; they are on the list.
        data: { status: "You have already joined our waitlist." },
      };
    }

    const entry = {
      ...data,
      email,
      joinedAt: new Date().toISOString(),
    };

    const transaction = redis.multi();
    transaction.sadd(emailSetKey, email); // Add email to the Set for future duplicate checks.
    transaction.rpush(waitlistKey, JSON.stringify(entry)); // Add full data to the List.
    await transaction.exec();

    return {
      success: true,
      data: {
        status: "Thank you for joining our waitlist! We will be in touch.",
      },
    };
  } catch (error) {
    console.error("Something went wrong updating waitlist:", error);
    return {
      success: false,
      data: {
        status:
          "We're sorry, but something went wrong on our end. Please try again later.",
      },
      error: error.message,
    };
  }
};
