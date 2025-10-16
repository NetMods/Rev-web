"use server";

import { redis } from "@/lib/db";

export const UpdateWaitlist = async (data) => {
  try {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid data format");
    }

    await redis.rpush(
      "revord-waitlist",
      JSON.stringify({
        ...data,
        joinedAt: new Date().toLocaleString(),
      }),
    );

    return { success: true };
  } catch (error) {
    console.error("Something went wrong updating waitlist:", error);
    return { success: false, error: error.message };
  }
};

export const GetWaitlist = async () => {
  try {
    const list = await redis.lrange("revord-waitlist", 0, -1);
    const parsedList = list.map((item) => JSON.parse(item));
    return { success: true, data: parsedList };
  } catch (error) {
    console.error("Failed to fetch waitlist:", error);
    return { success: false, error: error.message };
  }
};
