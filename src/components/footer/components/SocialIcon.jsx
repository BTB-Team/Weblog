const SocialIcon = ({ icon, size = 24, style = "hover:opacity-70" }) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={`${style} duration-200`}
    >
      <path d={icon.path} />
    </svg>
  );
};

export default SocialIcon;
