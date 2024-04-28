//in controllers folder make preference.controller.js


import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { Profile } from '../models/profile.model.js';

const createPreference = asyncHandler(async (req, res) => {
  if (!req.body) {
    throw new ApiError(400, "Request body is missing");
  }

  const { community } = req.body;

  if (!community) {
    throw new ApiError(400, "Community is required");
  }

  const newPreference = await Profile.create({ community });

  return res.status(201).json(new ApiResponse(201, "Preference created", newPreference));
});

export { createPreference };