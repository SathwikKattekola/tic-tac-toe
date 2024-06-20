document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    let currentPlayer = 'x';

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (cell.textContent === '') {
                cell.textContent = currentPlayer;
                cell.classList.add(currentPlayer);
                if (checkWin(currentPlayer)) {
                    setTimeout(() => alert(currentPlayer.toUpperCase() + ' wins!'), 100);
                    resetBoard();
                } else if (Array.from(cells).every(cell => cell.textContent !== '')) {
                    setTimeout(() => alert('Draw!'), 100);
                    resetBoard();
                } else {
                    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
                }
            }
        });
    });

    function checkWin(player) {
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        return winPatterns.some(pattern => {
            return pattern.every(index => {
                return cells[index].classList.contains(player);
            });
        });
    }

    function resetBoard() {
        cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('x', 'o');
        });
        currentPlayer = 'x';
    }
});
