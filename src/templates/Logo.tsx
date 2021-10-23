type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <img
        src="/assets/images/logo.svg"
        alt="logo"
        width="300px"
        className="logo"
      />
      {/* {AppConfig.site_name} */}
      {/* hidebrowser */}
    </span>
  );
};

export { Logo };
