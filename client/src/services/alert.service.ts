export default class AlertService {
    message: any = {};

    success(msg) {
        this.message.hidden = false;
        this.message.type = 'success';
        this.message.text = msg;
    }

    error(msg) {
        this.message.hidden = false;
        this.message.type = 'error';
        this.message.text = msg;
    }

    hide() {
        this.message.hidden = true;
    }
}