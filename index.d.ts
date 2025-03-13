interface FORM_FIELD_PROPS {
  label: string;
  id: string;
  type: string;
  formik: any;
  showToggle?: boolean;
  onToggle?: () => void;
  placeholder?: string;
}

interface LOGIN_REDUX_STATE {
  access_token: null;
  token_type: null;
  expires_in: null;
  isGlobalLoading: boolean;
}

interface LOGIN_USER_PROPS {
  payload: {
    email: string;
    password: string;
    betaCode: string;
  };
  onSuccess: () => void;
  onError: (error: string) => void;
}

interface LOGOUT_USER_PROPS {
  onSuccess: () => void;
  onError: (error: string) => void;
}

interface LOGIN_USER_HOOK_PROPS {
  values: {
    email: string;
    password: string;
    betaCode: string;
  };
  setSubmitting: (submitting: boolean) => void;
}
