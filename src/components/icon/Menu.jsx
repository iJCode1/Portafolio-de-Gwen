function Menu({ size = "24", color = "red" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M22 5H2V7H22V5ZM22 11H2V13H22V11ZM2 19H22V17H2V19Z" fill={color} />
    </svg>
  );
}

export default Menu;