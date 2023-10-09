interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['HR Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['HR Manager', 'Employee', 'Payroll Administrator'],
  tenantName: 'Company',
  applicationName: 'HR Information System v2',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read job positions',
    'Read company information',
    'Read user information',
    'Read employee information',
  ],
  ownerAbilities: ['Manage job positions', 'Manage employees', 'Manage payrolls', 'Manage vacations'],
  getQuoteUrl: 'https://app.roq.ai/proposal/29f087f5-1506-4350-85c5-d0207d989ab6',
};
