import filterValues, { IFilterValues } from './Filter';
export const FilterList = ({ image, setFilteredImg }: any) => {
  return (
    <div className="FilterList">
      {filterValues.map((elem: IFilterValues) => {
        return (
          <div style={{ margin: '5px' }} key={elem.name} onClick={() => setFilteredImg(elem.class)}>
            <img id="filter-image" src={image} className={elem.class} />
          </div>
        );
      })}
    </div>
  );
};
