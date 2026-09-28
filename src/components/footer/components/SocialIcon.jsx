const SocialIcon = ({ icon, size = 24 }) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:text-accent duration-200"
    >
      <path d={icon.path} />
    </svg>
  );
};

export default SocialIcon;
