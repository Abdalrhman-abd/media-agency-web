import React from 'react'
import Vector2 from '../../../assets/images/Vector2.png'
import icon9 from '../../../assets/images/icon9.png'

interface PortfolioPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PortfolioPagination = ({

  currentPage,
  totalPages,
  onPageChange,

}: PortfolioPaginationProps) => {
  if (totalPages <= 1) return null;
 return (
    <div className="flex items-center justify-center gap-4">
      {/* Previous Page */}
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="disabled:opacity-40 disabled:cursor-not-allowed"
        aria-label="Previous page"
      >
        <img
          src={Vector2}
          alt=""
          className="w-10"
        />
      </button>

      {/* Current Page */}
      <span className="text-sm font-medium">
        {currentPage} / {totalPages}
      </span>

      {/* Next Page */}
      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="disabled:opacity-40 disabled:cursor-not-allowed"
        aria-label="Next page"
      >
        <img
          src={icon9}
          alt=""
          className="w-11"
        />
      </button>
    </div>
  );
}

export default PortfolioPagination

