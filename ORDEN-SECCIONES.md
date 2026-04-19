# Orden de secciones — Nueva Web IZIPAY 2026
> Verificado con screenshots del Figma (proto + design view), 2026-04-19

---

## ✅ ORDEN CORRECTO CONFIRMADO

| # | Sección | Estado en index.html |
|---|---------|----------------------|
| 1 | **Navbar** | ✅ OK |
| 2 | **Hero Carousel** (3 slides) | ✅ OK |
| 3 | **Herramientas rápidas** (quick tools bar) | ✅ OK (es `.sectores-section` actual, solo la barra superior) |
| 4 | **Sectores** "Haz que tu negocio siga creciendo" | ✅ OK posición |
| 5 | **Medios de pago** "Aceptamos todos los medios de pago" | ✅ OK |
| 6 | **Promociones** (carousel 3 banners) | ✅ OK |
| 7 | **Beneficios** "Somos tu mejor aliado para crecer sin límites" | ❌ Está en pos 9 — debe subir a pos 7 |
| 8 | **Productos** "Un producto pensado para cada negocio" | ❌ Está en pos 6 — debe bajar a pos 8 |
| 9 | **Simulador izipay** | ✅ OK posición relativa |
| 10 | **Testimonios** "Una nueva era para los pagos digitales" | ✅ OK |
| 11 | **Marcas** "Grandes marcas, un mismo aliado" | ✅ OK |
| 12 | **CTA** "Empieza hoy a potenciar tu negocio" | ✅ OK |
| 13 | **Footer** | ✅ OK |

---

## ✅ PREGUNTAS RESPONDIDAS (desde Figma)

### 1. ¿Sectores existe? ✅ SÍ
Aparece en posición 4, con:
- Tabs: Restaurantes y Bares / Tiendas / Salud / Educación / Retail...
- Accordion FAQ con: "Acepta todos los tipos de pago", "Administra tus pedidos en un solo lugar", "Impulsa tu negocio al siguiente nivel"
- Recomendación de productos al final del accordion

### 2. ¿Qué productos tiene la sección Productos?
Tabs visibles en Figma:
- **Ventas físicas**: QR Parlante (S/139.80), POS Android P1 SE (S/148.00) x2
- **Ventas online**: izipay Web (S/49.00), izipay Online (Gratis)
- **Desde tu celular / Soluciones online / Autoservicio** (tabs adicionales)
⚠️ Los nombres de los productos en el Figma son P1 SE — actualmente tenemos P2 SE en index.html. Consultar al usuario.

### 3. Promociones carousel — 3 slides confirmados ✅
1. "Potencia tu negocio sumándole Ari a tu POS izipay desde S/59 al mes" = `Product/1920x592 4.png`
2. "¡QUE SUENE! El primer parlante que confirma tus ventas / 0% COMISIÓN" = `Product/image 177.png`
3. "Súmale Ari a tu POS y emite boletas electrónicas en un instante" = `Product/image 176.png`

### 4. Beneficios — imágenes ⚠️
El Figma tiene placeholders en las 3 cards (Seguridad, Multicanal, Integración). Pendiente confirmar con usuario.

### 5. Marcas — imágenes ⚠️
El Figma tiene placeholders. Pendiente confirmar con usuario.

### 6. Testimonios — texto real ⚠️
El Figma usa "Lorem ipsum". Pendiente confirmar texto real con usuario.

---

## FIX PENDIENTE: Intercambiar posición Beneficios ↔ Productos

```
ACTUAL:           CORRECTO:
1. Navbar         1. Navbar
2. Hero           2. Hero
3. Herram.        3. Herram.
4. Sectores       4. Sectores
5. Medios         5. Medios
6. Promo          6. Promo
7. Productos  ←   7. BENEFICIOS ←
8. Simulador      8. PRODUCTOS  ←
9. Testimonios    9. Simulador
10. BENEFICIOS←  10. Testimonios
11. Marcas        11. Marcas
12. CTA           12. CTA
13. Footer        13. Footer
```
