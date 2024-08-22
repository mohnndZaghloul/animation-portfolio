import Shadow from "../components/ui/Shadow";

const Courses = () => {
  return (
    <main className="relative overflow-hidden flex flex-col justify-center items-center h-screen text-white">
      <h1 className="text-2xl md:text-4xl capitalize font-sans">coming soon</h1>
      {/* <div className="relative mt-4 p-6 animate-spin duration-700">
        <span className="absolute top-0 left-0 rounded-full w-4 h-4 bg-white"></span>
        <span className="absolute top-0 right-0 rounded-full w-4 h-4 bg-primary"></span>
        <span className="absolute bottom-0 left-0 rounded-full w-4 h-4 bg-Secondary"></span>
        <span className="absolute bottom-0 right-0 rounded-full w-4 h-4 bg-white"></span>
      </div> */}
      <Shadow isRed positionY="-bottom-1/3 translate-y-1/2" />
      <Shadow positionY="-bottom-1/3 translate-y-1/2" />
      <div
        className={`absolute -bottom-1/3 translate-y-1/2 right-0 blur-[14rem]  w-[26rem] h-[26rem] bg-Secondary rounded-full z-40`}
      />
      <div
        className={`absolute -bottom-1/3 translate-y-1/2 right-0 blur-[25rem]  w-[58rem] h-[30rem] bg-primary rounded-full z-40`}
      />
    </main>
  );
};

export default Courses;
