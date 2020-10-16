"use strict";
const mongoose = require("mongoose"),
  Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");
const UserSchema = new Schema(
  {
    firstName: { type: String, required: [true, "First Name is required"] },
    lastName: { type: String, required: [true, "Last Name is required"] },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true
    },
    city: { type: String, default: null },
    country: { type: String, default: null },
    state: { type: String, default: null },
    password: { type: String, select: false },
    phoneNo: { type: String, },
    rating: { type: Number, default: 0 },
    emailVerified: { type: Boolean, default: false },
    phoneVerified: { type: Boolean, default: false },
    profilePic: {},
    role: [],
    isDeleted: { type: Boolean, select: false, default: false },
    lastPasswordChanged: { type: Date, default: new Date() },
    gender: {
      type: String, enum: ['male', 'female'], // required: [true, "Gender is required"],
      // lowercase: true
    },
    dob: { type: String, default: '' },
    accountType: { type: String, },
    location: {
      type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ['Point'], // 'location.type' must be 'Point'
        // required: [true, "location is required"]
      },
      coordinates: {
        type: [Number],
        // required: [true, "location is required"]
        // required: true'
      }
    },
    workAddress: { type: String, },
    workPhone: { type: String, },
    consultationFee: { type: String, },
    address: { type: String, },
    maritalStatus: { type: String, },
    isBlocked: { type: Boolean, default: false },
    education: [],
    // award: [],
    url: { type: String },
    qualifications: { type: String, },
    affilatedHospital: [{ type: Schema.Types.ObjectId, ref: "HospitalSchema" }],
    totalExperience: { type: String, },
    category: [{ type: Schema.Types.ObjectId, ref: "CategorySchema" }],
    status: { type: String, enum: ['active', 'inactive'], default: 'inactive' },
    isUnActiveStatus: { Types: Boolean, default: false },
    isProfileComplete: { type: Boolean, default: false },
    securityQuestion: [
      { questionId: { type: String }, answer: { type: String } }
    ],
    currentRole: { type: String },
    isPatientRole: { type: String },
    isDoctorRole: { type: String },
    // securityQuestion1: { questionId: { type: Schema.Types.ObjectId, answer: { type: String } } },
    // securityQuestion2: { questionId: { type: Schema.Types.ObjectId, answer: { type: String } } },
    // securityQuestion3: { questionId: { type: Schema.Types.ObjectId, answer: { type: String } } }
  },
  { timestamps: true }
);

// Remove all those fields that should not publicly available
UserSchema.methods.getPublicProfile = function () {
  const user = this.toObject();

  delete user.password;
  delete user.isDeleted;
  delete user.securityQuestion;

  return user;
};

UserSchema.plugin(uniqueValidator, { message: "{PATH} already exist." });

module.exports = mongoose.model("user", UserSchema);
