import {
  UseExpandedHooks,
  UseExpandedInstanceProps,
  UseExpandedOptions,
  UseExpandedRowProps,
  UseExpandedState,

  UseFiltersColumnOptions,
  UseFiltersColumnProps,
  UseFiltersInstanceProps,
  UseFiltersOptions,
  UseFiltersState,

  UsePaginationOptions,
  UsePaginationInstanceProps,
  UsePaginationState,

  UseSortByColumnOptions,
  UseSortByColumnProps,
  UseSortByHooks,
  UseSortByInstanceProps,
  UseSortByOptions,
  UseSortByState
} from 'react-table'

// SOURCE: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-table
// NOTE: currently assumes all react-table instances in the project use the same plugin hooks
// (useExpanded, useSortBy)

declare module 'react-table' {
  // take this file as-is, or comment out the sections that don't apply to your plugin configuration

  export interface TableOptions<D extends Record<string, unknown>>
    extends
      UseExpandedOptions<D>,
      UseFiltersOptions<D>,
      UsePaginationOptions<D>,
      UseSortByOptions<D>,
      // note that having Record here allows you to add anything to the options, this matches the spirit of the
      // underlying js library, but might be cleaner if it's replaced by a more specific type that matches your
      // feature set, this is a safe default.
      Record<string, any> {}

  export interface Hooks<D extends Record<string, unknown> = Record<string, unknown>>
    extends
      UseExpandedHooks<D>,
      UseSortByHooks<D> {}

  export interface TableInstance<D extends Record<string, unknown> = Record<string, unknown>>
    extends
      UseExpandedInstanceProps<D>,
      UseFiltersInstanceProps<D>,
      UsePaginationInstanceProps<D>,
      UseSortByInstanceProps<D> {}

  export interface TableState<D extends Record<string, unknown> = Record<string, unknown>>
    extends
      UseExpandedState<D>,
      UseFiltersState<D>,
      UsePaginationState<D>,
      UseSortByState<D> {}

  export interface ColumnInterface<D extends Record<string, unknown> = Record<string, unknown>>
    extends
      UseFiltersColumnOptions<D>,
      UseSortByColumnOptions<D> {}

  export interface ColumnInstance<D extends Record<string, unknown> = Record<string, unknown>>
    extends
      UseFiltersColumnOptions<D>,
      UseFiltersColumnProps<D>,
      UseSortByColumnProps<D> {}

  // export interface Cell<D extends Record<string, unknown> = Record<string, unknown>, V = any>
  export interface Row<D extends Record<string, unknown> = Record<string, unknown>>
    extends
      UseExpandedRowProps<D> {}
}
