import Swal from "sweetalert2";

export  function AlertSuccess(text :string ,title:string = "Good", ) {
    Swal.fire({
        title: title,
        text: text,
        icon: "success",
      });
}


export  function AlertError(title :string ,text:string = "Error", ) {
    Swal.fire({
        title: title,
        text: text,
        icon: "error",
      });
}

export  function AlertWarning(title :string ,text:string = "Error", ) {
    Swal.fire({
        title: title,
        text: text,
        icon: "warning",
      });
}


