
const Footer = () => {
    const d = new Date();
    const year = d.getFullYear();
  return (
    <div className="flex items-center justify-center flex-col mt-23">
        <div className="w-70 h-0.5 bg-gray-300 mx-20 md:w-175 lg:w-255">
        </div>
        <div className="text-black opacity-50 font-semibold text-[11px] md:text-xl mt-7.5 mb-7.5">
         &copy; {year} PulseGuard Ai. HealthCare Intelligence you can trust.
        </div>
    </div>
  )
}

export default Footer