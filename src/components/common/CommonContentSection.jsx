export default function CommonContentSection({
  headerContent,
  MainContent,
  SecondMainContent,
  headerContentCss,
  flexCss,
  paddingCss = "p-4",
  borderCss = "border-gray-200 border",
}) {
  return (
    <div className="flex flex-col gap-3">
      <h1
        className={`font-semibold text-2xl md:text-[2.2rem] ${headerContentCss}`}
      >
        {headerContent}
      </h1>
      <div
        className={`${paddingCss} rounded-2xl gap-3 flex flex-col ${borderCss} ${flexCss}`}
      >
        {MainContent}
      </div>
      {SecondMainContent}
    </div>
  );
}
