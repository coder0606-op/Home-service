const transitions = {
  PENDING: ["ASSIGNED", "CANCELLED"],
  ASSIGNED: ["IN_PROGRESS", "FAILED", "CANCELLED"],
  IN_PROGRESS: ["COMPLETED", "FAILED"],
  COMPLETED: [],
  FAILED: [],
  CANCELLED: []
};

const canTransition = (from, to) => {
  return transitions[from]?.includes(to);
};

export default canTransition;
