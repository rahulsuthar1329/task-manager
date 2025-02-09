const Avatar = () => {
  const sampleImageUrl = "https://www.w3schools.com/w3images/avatar2.png";

  return (
    <div
      className="text-[10px] bg-[#395b9e91] h-6 w-6 rounded-full flex justify-center items-center cursor-pointer hover:opacity-90"
      style={{
        background: `url(${sampleImageUrl}') center center no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <span>RS</span>
    </div>
  );
};

export default Avatar;
