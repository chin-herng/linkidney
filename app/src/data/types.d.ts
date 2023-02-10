type Job = {
  id: number;
  title: string;
  description: string;
  salary?: number;
  postedOn: string;
  startDate: string;
  company: Company;
};

type Company = {
  id: number;
  name: string;
  description: string;
  address: string;
  contactNumber: string;
  image: string;
  hiredUsers: number;
  rating: number;
  flexibleWorkHours: boolean;
};

type User = {
  id: number;
  treatmentSchedule: string;
  description: string;
  rating: number;
};
