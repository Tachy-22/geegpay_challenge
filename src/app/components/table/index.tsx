"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Selection,
  SortDescriptor,
} from "@nextui-org/react";
import { columns, users, statusOptions } from "./data";
import { capitalize } from "./utils";
import { ChevronDownIcon, File, SearchIcon } from "lucide-react";

type User = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  date: string;
  status: string;
  invoice: string;
};

type Status = {
  active: string;
  paused: string;
  vacation: string;
};

type Color =
  | "success"
  | "danger"
  | "warning"
  | "default"
  | "primary"
  | "secondary";

type Item = {
  id: number;
  name: string;
  date: string;
  status: string;
  age: string;
  avatar: string;
  email: string;
};

const INITIAL_VISIBLE_COLUMNS = ["name", "amount", "date", "status", "invoice"];

export default function DataTable() {
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = React.useState<string>("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState<{
    column: string;
    direction: string;
  }>({
    column: "age",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if ((visibleColumns as unknown as string) === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status)
      );
    }

    return filteredUsers;
  }, [hasSearchFilter, statusFilter, filterValue]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      // Ensure that 'sortDescriptor.column' is a valid key for indexing 'Item'
      const columnName = sortDescriptor.column as keyof Item;

      const first = a[columnName] as unknown as number;
      const second = b[columnName] as unknown as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((user: User, columnKey: keyof User) => {
    const statusColorMap: {
      active: string;
      paused: string;
      vacation: string;
    } = {
      active: "success",
      paused: "warning",
      vacation: "warning",
      // Add other status-color mappings as needed
    };
    const cellValue = user[columnKey];
    const userStatus = statusColorMap[user.status as keyof Status] as Color;
    switch (columnKey) {
      case "name":
        return (
          <div className="w-min h-full ">
            <User
              avatarProps={{ src: user.avatar }}
              description={user.email}
              name={cellValue}
            >
              {user.email}
            </User>
          </div>
        );
      case "date":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize text-gray-500 gray-300/50">
              {cellValue}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={`${cellValue === "paid" ? "success" : "danger"}`}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "invoice":
        return (
          <div className=" gray-300/50 flex gap-2 ">
            <File className="text-gray-300" />
            <p className=" gray-400/90">View</p>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value as unknown as number));
      setPage(1);
    },
    []
  );

  const onSearchChange = React.useCallback(
    (value: React.SetStateAction<string>) => {
      if (value) {
        setFilterValue(value);
        setPage(1);
      } else {
        setFilterValue("");
      }
    },
    []
  );

  const onClear = React.useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4 ">
        <div className="flex justify-between gap-3 items-end">
          <Input
            variant="faded"
            size="sm"
            radius="full"
            isClearable
            classNames={{
              base: ["max-w-[40rem]"],
            }}
            placeholder="Search by name..."
            startContent={<SearchIcon size={18} />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className=" gap-3 items-center hidden sm:flex">
            <p className="">filter by:</p>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-sm" />}
                  variant="ghost"
                  color="default"
                >
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter as (keys: Selection) => void}
              >
                {statusOptions.map(
                  (status: { uid: string | number | undefined; name: any }) => (
                    <DropdownItem key={status.uid} className="capitalize">
                      {capitalize(status.name)}
                    </DropdownItem>
                  )
                )}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-sm" />}
                  variant="faded"
                  className=" text-white"
                  color="primary"
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={
                  setVisibleColumns as (keys: Selection) => any
                }
              >
                {columns.map(
                  (column: { uid: string | number | undefined; name: any }) => (
                    <DropdownItem key={column.uid} className="capitalize">
                      {capitalize(column.name)}
                    </DropdownItem>
                  )
                )}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-sm">
            Total {users.length} users
          </span>
          <label className="flex items-center text-default-400 text-sm">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-sm"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    onSearchChange,
    statusFilter,
    visibleColumns,
    onRowsPerPageChange,
    onClear,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-sm text-default-400">
          {(selectedKeys as unknown as string) === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${filteredItems.length} selected`}
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onPreviousPage}
          >
            Previous
          </Button>
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }, [
    selectedKeys,
    filteredItems.length,
    page,
    pages,
    onPreviousPage,
    onNextPage,
  ]);

  return (
    <div className="  w-full">
      <Table
        aria-label="Example table with custom cells, pagination and sorting "
        isHeaderSticky
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        classNames={{
          wrapper: "max-h-[382px] ",
        }}
        selectedKeys={selectedKeys}
        selectionMode="multiple"
        sortDescriptor={setSortDescriptor as SortDescriptor}
        topContent={topContent}
        topContentPlacement="outside"
        onSelectionChange={setSelectedKeys as (e: Selection) => void}
        onSortChange={setSortDescriptor as (e: SortDescriptor) => void}
        className=""
      >
        <TableHeader columns={headerColumns}>
          {(column) => (
            <TableColumn key={column.uid} allowsSorting={column.sortable}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          className=" flex justify-between"
          emptyContent={"No users found"}
          items={sortedItems as any}
        >
          {(item: User) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>
                  {renderCell(item, columnKey as keyof User)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
