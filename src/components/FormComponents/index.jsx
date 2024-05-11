import "./style.scss";

export const Button = ({ children, color, className, ...props }) => (
  <button
    style={{ backgroundColor: color || "#ccc" }}
    {...props}
    className={
      className + " py-[12px] block px-[35px] rounded-full text-[18px]"
    }
  >
    {children}
  </button>
);

export const Input = ({ label, setValue, ...props }) => (
  <div>
    {label && (
      <label className="uppercase text-label font-regular text-[14px] mb-[12px] block">
        {label}
      </label>
    )}
    <input
      className="text-label font-bold placeholder-[#15143966] text-[18px] px-[24px] py-[12px] rounded-full block w-full border-2 border-solid border-[#EBEAED] focus:border-[#cecdcf] transition-all"
      onChange={(e) => setValue(e.target.value)}
      {...props}
    />
  </div>
);

export const Textarea = ({ label, setValue, ...props }) => (
  <div>
    {label && (
      <label className="uppercase text-label font-regular text-[14px] mb-[12px] block">
        {label}
      </label>
    )}
    <textarea
      className="text-label font-bold placeholder-[#15143966] text-[18px] px-[24px] py-[12px] rounded-[10px] block w-full border-2 border-solid border-[#EBEAED] focus:border-[#cecdcf] transition-all"
      onChange={(e) => setValue(e.target.value)}
      {...props}
    ></textarea>
  </div>
);

export const Select = ({ label, setValue, children, ...props }) => (
  <div>
    {label && (
      <label className="uppercase text-label font-regular text-[14px] mb-[12px] block">
        {label}
      </label>
    )}

    <select
      className="text-label font-bold placeholder-[#15143966] text-[18px] px-[24px] py-[12px] rounded-full block w-full border-2 border-solid border-[#EBEAED] focus:border-[#cecdcf] transition-all"
      onChange={(e) => setValue(e.target.value)}
      {...props}
    >
      {children}
    </select>
  </div>
);

export const Checkbox = () => (
  <label className="checkbox">
    <input type="checkbox" />
    <span className="checkmark"></span>
  </label>
);
