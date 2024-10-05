import { Component } from '@angular/core';
import { Business } from './Business'; // ajuste o import conforme necessário
import { BusinessTakeService } from './business-take.service'; // ajuste o import do seu serviço

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  candidate = 'Arthur Candian Rocha';
  companies: Business[] = []; // Inicializa como um array vazio
  searchValue: string = '';

  constructor(private compSvc: BusinessTakeService) {}

  ngOnInit() {
    this.listCompanies();
  }

  listCompanies() {
    this.compSvc.getAll().subscribe(
      (res: Business[]) => {
        this.companies = res;
      },
      (error) => {
        console.error('Error fetching companies:', error);
      }
    );
  }

  listAndFilterBusinesses() {
    this.companies = this.filteredCompanies(); // Usa o filtro para atualizar a lista de empresas
  }

  filteredCompanies(): Business[] {
    if (!this.searchValue) {
      return this.companies; // Retorna todas as empresas se não houver valor de busca
    }
    return this.companies.filter(company => 
      company.name.toLowerCase().includes(this.searchValue.toLowerCase()) || 
      company.segment.toLowerCase().includes(this.searchValue.toLowerCase()) // ajuste conforme os campos reais
    );
  }
}
