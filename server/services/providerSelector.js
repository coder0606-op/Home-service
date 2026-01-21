import User from "../models/User.js";


const getRandomProvider = async () => {
  const providers = await User.find({
    role: "PROVIDER",
    isAvailable: true
  });

  if (providers.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * providers.length);
  return providers[randomIndex];
};

export default getRandomProvider;
