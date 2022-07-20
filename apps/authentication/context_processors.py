from .forms import LoginForm, SignUpForm

# context_processor.py
def SignUpFormGlobal(request):
    return {
        'signup_form': SignUpForm()
}
def SignInFormGlobal(request):
    return {
        'signin_form': LoginForm()
}