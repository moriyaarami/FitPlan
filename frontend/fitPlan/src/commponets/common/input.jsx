function Input({ label, error, value, ...rest }) {


    return <>
        <div className=" mb-3">
            <label htmlFor={rest.name} className="form-label">{label}
                {rest.required && <span className="text-danger mx-1">*</span>}
            </label>

            <input
                {...rest}
                value={value || ''}
                className={["form-control", error && "is-invalid"].filter(Boolean).join(" ")}
                id={rest.name}
            />
            <div className="invalid-feedback">{error}</div>
        </div>
    </>
}

export default Input;