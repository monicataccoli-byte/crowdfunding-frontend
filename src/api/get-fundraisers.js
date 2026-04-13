export const dogDetails = [
  {
    id: 1,
    title: "Pucci",
    breed: "Pomeranian",
    age: "Adult",
    sex: "Female",
    vaccinated: "Yes",
    neutered: "Yes",
    description:
      "Pucci is a gentle companion currently in care and in need of daily support for food, shelter, and veterinary care.",
    story:
      "Pucci came into care needing safety, stability, and ongoing support. She is affectionate, calm, and deserves a future where she will always have a home, whether adopted or cared for for life.",
    temperament: "Gentle, affectionate, and calm.",
    care_needs:
      "Daily food, secure housing, regular grooming, and ongoing veterinary care.",
    medical_notes:
      "Requires routine health monitoring and consistent supportive care.",
    image:
      "https://res.cloudinary.com/dqt5mriuz/image/upload/v1775552409/850_8109_m5kqx5.jpg",
  },
  {
    id: 2,
    title: "Mojo",
    breed: "Pomeranian",
    age: "11 years old",
    sex: "Male",
    vaccinated: "Yes",
    neutered: "Yes",
    description:
      "Mojo is a cheerful older dog who loves comfort, company, and gentle daily care.",
    story:
      "Mojo is a senior dog who thrives in calm surroundings and enjoys companionship. He deserves reliable care, warmth, and comfort in his later years.",
    temperament: "Friendly, cuddly, and relaxed.",
    care_needs:
      "Soft bedding, steady meals, daily companionship, and senior-friendly support.",
    medical_notes: "Senior care needs should be monitored regularly.",
    image:
      "https://res.cloudinary.com/dqt5mriuz/image/upload/v1775553415/Mojo_ebwov9.jpg",
  },
  {
    id: 3,
    title: "ZaZa",
    breed: "Mixed Breed",
    age: "Young",
    sex: "Female",
    vaccinated: "Yes",
    neutered: "No",
    description:
      "ZaZa is full of spirit and needs a safe place, steady care, and support while waiting for the right home.",
    story:
      "ZaZa is lively, curious, and full of energy. She needs daily care, a stable environment, and patient support while waiting for a loving future.",
    temperament: "Playful, energetic, and bright.",
    care_needs:
      "Daily exercise, secure housing, nutritious food, and routine veterinary care.",
    medical_notes: "Needs standard monitoring and ongoing care.",
    image:
      "https://res.cloudinary.com/dqt5mriuz/image/upload/v1775553440/ZaZa_ree5hg.jpg",
  },
  {
    id: 4,
    title: "Rocky",
    breed: "Bulldog",
    age: "Senior",
    sex: "Male",
    vaccinated: "Yes",
    neutered: "Yes",
    description:
      "Rocky is a calm senior dog who deserves comfort, dignity, and dependable long-term care.",
    story:
      "Rocky is a gentle older dog who enjoys rest, comfort, and consistent care. He deserves dignity and security for the rest of his life.",
    temperament: "Calm, sweet, and steady.",
    care_needs:
      "Comfortable housing, regular meals, senior support, and health monitoring.",
    medical_notes: "Senior medical needs may require more frequent support.",
    image:
      "https://res.cloudinary.com/dqt5mriuz/image/upload/v1775552702/Rocky_y0klro.jpg",
  },
  {
    id: 5,
    title: "Flo",
    breed: "Spaniel",
    age: "Puppy",
    sex: "Female",
    vaccinated: "No",
    neutered: "No",
    description:
      "Flo is a bright young puppy who needs daily food, warmth, and care as she grows stronger.",
    story:
      "Flo is still very young and needs a secure start in life. Support helps provide the essentials she needs to grow safely and happily.",
    temperament: "Bright, curious, and loving.",
    care_needs:
      "Nutritious food, warm bedding, social care, and puppy health support.",
    medical_notes: "Vaccination schedule still in progress.",
    image:
      "https://res.cloudinary.com/dqt5mriuz/image/upload/v1775552651/Flo_tongue_gueoli.jpg",
  },
  {
    id: 6,
    title: "Timmy",
    breed: "Terrier",
    age: "Young",
    sex: "Male",
    vaccinated: "Yes",
    neutered: "Yes",
    description:
      "Timmy is small but full of personality and needs ongoing support while waiting for adoption.",
    story:
      "Timmy is a spirited little dog with a lot of heart. Support helps provide him with the stability and care he needs while waiting for the right match.",
    temperament: "Lively, brave, and affectionate.",
    care_needs:
      "Daily meals, supervised activity, secure housing, and routine support.",
    medical_notes: "No major concerns currently noted.",
    image:
      "https://res.cloudinary.com/dqt5mriuz/image/upload/v1775552714/Timmy_mqqt3r.jpg",
  },
  {
    id: 7,
    title: "Mignon",
    breed: "Mixed Breed",
    age: "Adult",
    sex: "Female",
    vaccinated: "Yes",
    neutered: "Yes",
    description:
      "Mignon is sweet, calm, and deserving of a safe, loving environment with reliable daily care.",
    story:
      "Mignon is gentle and well suited to a peaceful environment. She deserves consistent care, kindness, and lifelong security if she is never adopted.",
    temperament: "Quiet, sweet, and gentle.",
    care_needs:
      "Daily meals, safe shelter, emotional care, and veterinary support.",
    medical_notes: "Requires routine monitoring and consistent care.",
    image:
      "https://res.cloudinary.com/dqt5mriuz/image/upload/v1775553401/MIgnon_roo563.jpg",
  },
];

export function findDogDetailByTitle(title) {
  return dogDetails.find(
    (dog) => dog.title.toLowerCase() === String(title).toLowerCase()
  );
}

export const oneFundraiser = dogDetails[0];