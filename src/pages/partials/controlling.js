import { toast } from "react-toastify";

const controlling = (val) => {
    let status = true;

    for (let key in val) {
        if (!val[key].current.value.length) {
            status = false;
            val[key].current.classList.add('alert-border', 'danger');
            toast.error(`${val[key].current.previousElementSibling.textContent} Girilmesi Zorunludur`, {autoClose: 3000});

        } else {
            val[key].current.classList.remove('alert-border', 'danger');

        }

    }

    return status;
}

export default controlling;