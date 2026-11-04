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
    <div className="mt-16 flex items-center justify-center gap-4">
      {/* Previous Page */}
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`pb-2 flex justify-center items-center w-10 h-10 text-3xl rounded-full transition-all duration-300 ${currentPage === 1
            ? 'brand-gradient text-white'
            : 'bg-gray-200 text-gray-600'
          }`}
      >
        ‹
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
        className={` pb-2 flex justify-center items-center w-10 h-10 text-3xl rounded-full transition-all duration-300 ${currentPage === totalPages
            ? 'brand-gradient text-white'
            : 'bg-gray-200 text-gray-600'
          }`}>



        ›

      </button>
    </div>
  );
}

export default PortfolioPagination

