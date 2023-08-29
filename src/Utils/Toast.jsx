import Swal from "sweetalert2";

const Toast = (icon, title, text) => {
  Swal.fire({
    icon,
    title,
    text,
  });
};

export default Toast;
