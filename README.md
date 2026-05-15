# 💰 Spendify - Personal Finance Tracker

A clean, modern, and fully functional React web application for managing personal income and expenses.

![Spendify Dashboard](https://spendify-silk.vercel.app/og-image.png)  
*(Live Dashboard Preview)*

## ✨ Features

- ✅ Add Income & Expense transactions
- ✅ Edit existing transactions
- ✅ Delete transactions with confirmation
- ✅ Real-time balance, total income & expenses
- ✅ Filter (All / Income / Expense) + Search
- ✅ Fully responsive (Mobile + Desktop)
- ✅ Beautiful dark UI with Tailwind CSS

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
- **API**: json-server (Mock REST API)
- **Deployment**: Vercel

## 🚀 Links

- **Live Demo**: [https://spendify-silk.vercel.app](https://spendify-silk.vercel.app)
- **Figma Design**: [View Design](https://www.figma.com/design/2mYImO8GyQkK5UEkTmoSyL/Spendify---UI-Design?node-id=0-1&t=utaMWrL0tOGoOgQE-1)
- **Trello Board**: [View Trello_Board.png](./Trello_Board.png)
- **GitHub Repository**: [FrankNderitu/spendify](https://github.com/FrankNderitu/spendify)

## 📸 Screenshots

*(Add screenshots here after deployment)*

## 🖥️ Local Setup

```bash
# Clone the repo
git clone https://github.com/FrankNderitu/spendify.git
cd spendify

# Install dependencies
npm install

# Start backend (json-server)
npx json-server --watch db.json --port 3000

Open a new terminal and run:

# Start frontend
npm run dev

Open http://localhost:5173 to view the app.

 Project Structure

spendify/
├── src/
│   ├── components/     # TransactionCard, TransactionForm, Navbar
│   ├── pages/          # Home, AddTransaction, EditTransaction
│   ├── services/       # api.js
│   └── utils/          # helpers.js (formatCurrency)
├── db.json
├── public/
└── Trello_Board.png

Made with  by Team Spendify
Submitted: May 15, 2026

