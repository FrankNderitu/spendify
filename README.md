# 💰 Spendify - Personal Finance Tracker

A clean, modern, and fully functional React web application for tracking personal income and expenses.

![Spendify Dashboard](https://spendify-silk.vercel.app)

## ✨ Features

- ✅ Add Income & Expense transactions
- ✅ Edit existing transactions
- ✅ Delete transactions with confirmation
- ✅ Real-time balance, total income & expenses calculation
- ✅ Filter (All / Income / Expense) + Search functionality
- ✅ Fully responsive design (Mobile + Desktop)
- ✅ Beautiful dark theme with Tailwind CSS

## 👥 Team Members

| Role                | Name                |
|---------------------|---------------------|
| Group Leader        | Frank Kinyua        |
| UI/UX & Styling     | Shalone Gichana     |
| Dashboard           | Ian Gabriel         |
| Forms & CRUD        | Abdifatah Bashir    |

## 🛠️ Tech Stack

- **Frontend**: React.js + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Backend**: json-server (Mock REST API)
- **Deployment**: Vercel

## 🚀 Links

- **Live Demo**: [https://spendify-silk.vercel.app](https://spendify-silk.vercel.app)
- **Figma Design**: [View Figma](https://www.figma.com/design/2mYImO8GyQkK5UEkTmoSyL/Spendify---UI-Design?node-id=0-1&t=utaMWrL0tOGoOgQE-1)
- **Trello Board**: [View Trello_Board.png](./Trello_Board.png)
- **GitHub Repository**: [FrankNderitu/spendify](https://github.com/FrankNderitu/spendify)

## 🖥️ Local Setup

```bash
# Clone the repository
git clone https://github.com/FrankNderitu/spendify.git
cd spendify

# Install dependencies
npm install

# Start backend (in one terminal)
npx json-server --watch db.json --port 3000

Open a new terminal and run:

# Start frontend
npm run dev

Open http://localhost:5173

 Project Structure

spendify/
├── src/
│   ├── components/     # Navbar, TransactionCard, TransactionForm
│   ├── pages/          # Home, AddTransaction, EditTransaction
│   ├── services/       # api.js
│   └── utils/          # helpers.js
├── db.json
├── public/
└── Trello_Board.png

Made with  by Team Spendify
Submitted: May 15, 2026


