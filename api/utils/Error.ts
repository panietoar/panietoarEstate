
export const errorHandler = (statusCode: number, message: string) => {
  const error: Error = {
    statusCode,
    message,
  };
  return error;
};

export type Error = {
  statusCode: number;
  message: string;
};
