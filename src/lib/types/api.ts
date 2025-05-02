import { TProduct } from "./products";

export type TPaginationInfo = {
  currentPsge: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  nextPage: number | null;
  pageCount: number;
  previousPage: number | null;
  totalCount: number;
};

export type TOnlineShopResponse = {
  data: TProduct[];
  meta: TPaginationInfo;
};
