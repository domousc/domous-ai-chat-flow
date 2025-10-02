import { CreditCard, Smartphone, Shield, Check } from "lucide-react";

const PaymentSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-domous-dark mb-6">
            Formas de <span className="text-domous-gradient">pagamento</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Escolha a forma que for mais conveniente para você
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Single consolidated payment card */}
          <div className="bg-white rounded-3xl p-8 shadow-card-domous">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-domous-dark mb-3">
                Pagamento Flexível e Seguro
              </h3>
              <p className="text-muted-foreground">
                Escolha a forma de pagamento mais conveniente para você
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* PIX */}
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Smartphone className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-domous-dark mb-2">PIX</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Pagamento instantâneo e seguro. Ativação imediata da sua conta.
                  </p>
                  <div className="space-y-1.5">
                    <div className="flex items-center text-green-600 text-xs">
                      <Check className="h-3 w-3 mr-2" />
                      <span>Ativação instantânea</span>
                    </div>
                    <div className="flex items-center text-green-600 text-xs">
                      <Check className="h-3 w-3 mr-2" />
                      <span>Taxa zero</span>
                    </div>
                    <div className="flex items-center text-green-600 text-xs">
                      <Check className="h-3 w-3 mr-2" />
                      <span>Disponível 24/7</span>
                    </div>
                  </div>
                  <div className="mt-3 bg-green-50 p-2 rounded-lg">
                    <p className="text-green-700 font-semibold text-xs">
                      🎉 Primeira escolha dos clientes
                    </p>
                  </div>
                </div>
              </div>

              {/* Cartão de Crédito */}
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <CreditCard className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-domous-dark mb-2">Cartão de Crédito</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Pagamento recorrente automático. Sem preocupação com renovações.
                  </p>
                  <div className="space-y-1.5">
                    <div className="flex items-center text-blue-600 text-xs">
                      <Check className="h-3 w-3 mr-2" />
                      <span>Cobrança automática</span>
                    </div>
                    <div className="flex items-center text-blue-600 text-xs">
                      <Check className="h-3 w-3 mr-2" />
                      <span>Todas as bandeiras</span>
                    </div>
                    <div className="flex items-center text-blue-600 text-xs">
                      <Check className="h-3 w-3 mr-2" />
                      <span>Cancelamento fácil</span>
                    </div>
                  </div>
                  <div className="mt-3 bg-blue-50 p-2 rounded-lg">
                    <p className="text-blue-700 font-semibold text-xs">
                      💳 Visa, Master, Elo, Amex, Hiper
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Security info */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-domous-dark ml-3">
                  Pagamentos 100% Seguros
                </h4>
              </div>
              
              <p className="text-center text-sm text-muted-foreground mb-4">
                Criptografia de ponta e parceiros certificados para garantir a segurança total.
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <div className="text-center">
                  <div className="text-xs text-muted-foreground mb-1">Processamento</div>
                  <div className="text-sm font-semibold text-domous-dark">Asaas</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-muted-foreground mb-1">Certificação</div>
                  <div className="text-sm font-semibold text-domous-dark">SSL 256-bits</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-muted-foreground mb-1">Compliance</div>
                  <div className="text-sm font-semibold text-domous-dark">PCI DSS Level 1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;