import {Component, Vue} from 'vue-property-decorator';

export interface AuthFormInterface extends Vue{
    userName: string;
    password: string;
}

@Component({})
export default class AuthForm extends Vue {

    public get valid(): boolean {
        return this.password === this.confirmPassword;
    }

    public rules = {
        required(value: string) {
            return !!value || 'Required';
        },
        email(value: string) {
            const regexp = new RegExp(
                '^[a-z0-9!#$%&\'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$',
            );
            return regexp.test(value) || 'Invalid Email';
        },
    };


    private userName = '';
    private password: string = '';
    private confirmPassword: string = '';
    private alert = false;

    public $refs!: {
        authForm: AuthFormInterface,
    };


    public getFormData() {
        return {
            username: this.$refs.authForm.userName,
            password: this.$refs.authForm.password,
        };
    }

    public login($event: any) {

        $event.preventDefault();
        this.$store.dispatch('LOGIN', this.getFormData())
            .then((success) => {
                console.log('success');
            })
            .catch((error) => {
                this.alert = true;
                console.log(error);
            });
    }

    public admin($event: any) {

        $event.preventDefault();
        this.$store.dispatch('ADMIN', this.getFormData())
            .then((success) => {
                console.log('success');
            })
            .catch((error) => {
                this.alert = true;
                console.log(error);
            });
    }
}
