import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import HeaderBox from '@/components/ui/HeaderBox'

const Home = () => {
    const loggedIn = { firstName: 'Deagan'}
  return (

    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox 
                type="greeting"
                title="Welcome"
                user={loggedIn?.firstName || 'Guest' }
                subtext="Access and manage your account and transactions efficiently."
                />

                <TotalBalanceBox 
                accounts= {[]}
                totalBanks={1}
                totalCurrentBalance={1263732}
                />
                </header>
        </div>
    </section>
  )
}

export default Home