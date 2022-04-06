
export const getComments = async () => {
  
  return [
    {
      id: "1",
      body: "Great Experience",
      username: "Customer",
      userId: "1",
      parentId: null,
      createdAt: "2022-03-29T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "On Time Service",
      username: "Customer",
      userId: "2",
      parentId: null,
      createdAt: "2022-03-29T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "Flowless connectivity",
      username: "Customer",
      userId: "2",
      parentId: "1",
      createdAt: "2022-03-29T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "it's amazing 24*7 service",
      username: "Customer",
      userId: "2",
      parentId: "2",
      createdAt: "2022-03-29T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "Customer",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
