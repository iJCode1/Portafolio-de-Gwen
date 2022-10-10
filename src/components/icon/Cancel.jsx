function Cancel({ size = "24", color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M4.29297 5.70703L5.70703 4.29297L12 10.5859L18.293 4.29297L19.707 5.70703L13.4141 12L19.707 18.293L18.293 19.707L12 13.4141L5.70703 19.707L4.29297 18.293L10.5859 12L4.29297 5.70703Z" fill={color} />
    </svg>
  );
}

export default Cancel;