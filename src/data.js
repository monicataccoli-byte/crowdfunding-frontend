export const dogDetails = [
  {
    id: 1,
    title: "Pucci",
    age: "2 years",
    breed: "French Bulldog",
    sex: "Male",
    vaccinated: "Yes",
    neutered: "Yes",
    description:
      "Pucci is playful, affectionate, and loves cuddles. He needs a safe and loving forever home.",
    temperament: "Friendly, energetic, affectionate",
    care_needs:
      "Daily exercise, quality food, regular vet checks, lots of love",
    medical_notes: "Healthy, no known issues",
    goal: 1000,
    amount_raised: 0,
    image:
      "https://res.cloudinary.com/dqt5mriuz/image/upload/v1775552409/850_8109_m5kqx5.jpg",
  },
  {
    id: 2,
    title: "Bella",
    age: "3 years",
    breed: "Labrador",
    sex: "Female",
    vaccinated: "Yes",
    neutered: "Yes",
    description:
      "Bella is gentle and loyal. She loves people and is great with children.",
    temperament: "Calm, loving, loyal",
    care_needs: "Balanced diet, exercise, companionship",
    medical_notes: "Minor allergies",
    goal: 1200,
    amount_raised: 0,
    image: "https://via.placeholder.com/300.jpg",
  },
  {
    id: 3,
    title: "Mignon",
    age: "4 years",
    breed: "Mixed",
    sex: "Female",
    vaccinated: "Yes",
    neutered: "No",
    description:
      "Mignon is sweet, calm, and deserving of a safe, loving environment.",
    temperament: "Quiet, gentle, sweet",
    care_needs:
      "Daily meals, safe shelter, emotional care, and veterinary attention",
    medical_notes: "Requires routine monitoring",
    goal: 1000,
    amount_raised: 0,
    image: "https://via.placeholder.com/300.jpg",
  },
];

export const allFundraisers = dogDetails;
export const oneFundraiser = dogDetails[0];

export function findDogDetailById(id) {
  return dogDetails.find((dog) => dog.id === Number(id));
}