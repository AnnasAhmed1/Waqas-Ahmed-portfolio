const ProjectFrame = ({ video }: { video?: any }) => {
  return (
    <>
      <iframe
        className="rounded-2xl  w-[100%] h-[300px] max-md:h-[220px] border-2 border-black"
        src={`https://drive.google.com/file/d/${video?.urlId}/preview`}
        title="description"
        allow="autoplay"
      />
    </>
  );
};

export default ProjectFrame;
