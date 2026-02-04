type WeatherContainerProps = {
  children: React.ReactNode;
};

const WeatherContainer = ({ children }: WeatherContainerProps) => {
  return (
    <div className="flex w-full p-8 justify-center">
      <div className="w-full max-w-xs">
        <div className="mb-4">
          <div className="flex flex-col bg-white dark:bg-black shadow-lg rounded-3xl px-8 pt-6 pb-8 mb-4 opacity-80">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherContainer;
