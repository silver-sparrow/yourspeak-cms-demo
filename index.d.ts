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

interface SEARCH_BAR_PROPS {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

interface USER {
  id: number;
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  username: string;
  createdAt: string;
  isActive: boolean;
}

type COLUMN_DEF<T> = {
  accessorKey: keyof T | string;
  header: string;
  cell?: (props: { row: T }) => React.ReactNode;
  enableSorting?: boolean;
  meta?: {
    className?: string;
  };
};

type TABLE_DATA_PROPS<T> = {
  data: T[];
  columns: COLUMN_DEF<T>[];
  searchable?: boolean;
  searchField?: keyof T;
  pagination?: boolean;
  pageSize?: number;
  className?: string;
  emptyState?: React.ReactNode;
  isTab?: boolean;
  currentPage?: number;
  totalPages?: number;
  totalUsers?: number;
  handlePage?: (page: number) => void;
};

interface TABLE_PAGINATION_PROPS {
  currentPage: number;
  totalPages: number;
  handlePage: (page: number) => void;
  totalUsers: number;
  pageSize: number;
}

interface FETCH_USERS_HOOK_PROPS {
  payload: string;
  page: number;
  pageSize: number;
}

interface USER_STATUS_HOOK_PROPS {
  payload: {
    id: number;
    isActive: boolean;
  };
}

interface USER_STATUS_PROPS {
  payload: {
    id: number;
    isActive: boolean;
  };
  onSuccess: (message: string) => void;
  onError: (message: string) => void;
}

interface USER_DELETE_PROPS {
  userId: number;
  onSuccess: (message: string) => void;
  onError: (message: string) => void;
}

interface FETCH_USERS_PROPS {
  payload: string;
  page: number;
  pageSize: number;
  onComplete: () => void;
}

interface USERS_REDUX_STATE {
  users: USER[];
  current_page: number;
  total_users: number;
  total_pages: number;
}

type USER_MODALS_STATE = {
  delete: {
    isOpen: boolean;
    userId: number | null;
  };
  status: {
    isOpen: boolean;
    userId: number | null;
    isActive: boolean;
  };
};

type MODAL_TYPE = "delete" | "confirm" | "success" | "error" | "custom";

interface CONFIRMATION_MODAL_PROPS {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  type?: MODAL_TYPE;
  customIcon?: React.ReactNode;
}

interface TABLE_VIEW_PROPS<T extends object> {
  columns: COLUMN_DEF<T>[];
  handleSort: (column: string) => void;
  sortColumn: string | null;
  sortedData: T[];
  sortDirection: "asc" | "desc";
  emptyState: React.ReactNode;
}

type TAGS_MODALS_STATE = {
  delete: {
    isOpen: boolean;
    userId: number | null;
  };
  edit: {
    isOpen: boolean;
    userId: number | null;
  };
};

interface FETCH_TAGS_HOOK_PROPS {
  page: number;
  pageSize: number;
}

interface TAGS_REDUX_STATE {
  tags: TAG[];
  current_page: number;
  total_users: number;
  total_pages: number;
}

interface FETCH_TAGS_PROPS {
  page: number;
  pageSize: number;
  onComplete: () => void;
}
