import { notification } from 'antd';

export const Notify = (type, message, description) => {
    notification[type]({
        message: message,
        description: description,
    });
};

