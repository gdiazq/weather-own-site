type WeatherContainerProps = {
  children: React.ReactNode;
};

const WeatherContainer = ({ children }: WeatherContainerProps) => {
  return (
    <div className="flex w-full p-6 justify-center md:p-8">
      <div className="w-full max-w-xs">
        <div className="mb-4">
          <div className="flex flex-col rounded-3xl bg-white/70 px-8 pb-8 pt-6 shadow-sm ring-1 ring-black/10 backdrop-blur dark:bg-black/50 dark:ring-white/10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherContainer;
