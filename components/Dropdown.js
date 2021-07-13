function Dropdown({ toggle, isOpen }) {
    return (
        <div onClick={toggle}
            className={isOpen ? `z-10 grid grid-rows-3 text-center items-center bg-primary` : `hidden`}>
            <a className="p-4 text-white">Premium</a>
            <a className="p-4 text-white">Sign Up</a>
            <a className="p-4 text-white">Login</a>

        </div>
    )
}

export default Dropdown
