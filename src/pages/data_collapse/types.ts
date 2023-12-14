export type Subcontractor = {
  name: string;
  totalWorkhours: number;
};
export interface Customer {
  name: string;
  trade: string;
  totalWorkhours: number;
  subcontractors: Subcontractor[];
}
