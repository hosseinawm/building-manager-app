import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type AccountSummary = {
  balance: number;        // Current manager account balance
  currency?: string;      // Currency code, e.g., "USD"
  asOf: string;           // ISO timestamp of balance snapshot
};

export type UnpaidUser = {
  id: string;             // Unique user ID
  name: string;           // Full name
  phoneNumber: string;    // Contact phone
  unitName: string;       // e.g., "Unit 12A"
  buildingNumber: string | number;
  floorNumber: string | number;
  amountDue: number;      // Amount outstanding
  dueMonth: string;       // Format: "YYYY-MM"
};

export type MonthlyCost = {
  id: string;             // Unique cost record ID
  item: string;           // e.g., "Water Bill", "Security Fee"
  amount: number;         // Cost amount
  month: string;          // Format: "YYYY-MM"
  note?: string;          // Optional description/remark
};

export const managementApi = createApi({
  reducerPath: "managementApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["Account", "Users", "Costs"],
  endpoints: (builder) => ({
    getAccountSummary: builder.query<AccountSummary, void>({
      query: () => "manager/account-summary",
      providesTags: ["Account"],
    }),
    getUnpaidUsers: builder.query<UnpaidUser[], { limit?: number }>({
      query: ({ limit = 50 }) => `manager/unpaid-users?limit=${limit}`,
      providesTags: ["Users"],
    }),
    getLastMonthCosts: builder.query<MonthlyCost[], void>({
      query: () => `manager/last-month-costs`,
      providesTags: ["Costs"],
    }),
    // sendReminder: builder.mutation<void, { userIds: string[] }>({
    //   query: (body) => ({ url: `manager/remind`, method: "POST", body }),
    //   invalidatesTags: ["Users"],
    // }),
  }),
});

export const {
  useGetAccountSummaryQuery,
  useGetUnpaidUsersQuery,
  useGetLastMonthCostsQuery,
  // useSendReminderMutation,
} = managementApi;
