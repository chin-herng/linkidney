type Job = {
  id: number;
  title: string;
  description: string;
  salary?: number;
  startDate: string;
  company: Company;
};

type Company = {
  id: number;
  name: string;
  description: string;
  address: string;
  contactNumber: string;
  hiredUsers: number;
  rating: number;
  flexibleWorkHours: boolean;
};
