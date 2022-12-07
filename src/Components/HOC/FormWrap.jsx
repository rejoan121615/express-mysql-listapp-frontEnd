import React from "react";

const FormWrap = (props) => {
    return (
        <section className=" h-pageHeight">
        <div className=" w-[400px] mx-auto flex items-center justify-center h-full ">
          {props.children}
            </div>
        </section>
    );
};

export default FormWrap;
