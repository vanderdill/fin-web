import { booleanAttribute, Component, computed, input, output, } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import { BrnRadioComponent } from '@spartan-ng/brain/radio-group';
import * as i0 from "@angular/core";
const _c0 = [[["", "target", ""], ["", "indicator", ""]], "*"];
const _c1 = ["[target],[indicator]", "*"];
export class HlmRadioComponent {
    userClass = input('', { alias: 'class' });
    _computedClass = computed(() => hlm('group [&.brn-radio-disabled]:text-muted-foreground flex items-center space-x-2 rtl:space-x-reverse', this.userClass()));
    /** Used to set the id on the underlying brn element. */
    id = input(undefined);
    /** Used to set the aria-label attribute on the underlying brn element. */
    ariaLabel = input(undefined, {
        alias: 'aria-label',
    });
    /** Used to set the aria-labelledby attribute on the underlying brn element. */
    ariaLabelledby = input(undefined, {
        alias: 'aria-labelledby',
    });
    /** Used to set the aria-describedby attribute on the underlying brn element. */
    ariaDescribedby = input(undefined, {
        alias: 'aria-describedby',
    });
    /**
     * The value this radio button represents.
     */
    value = input.required();
    /** Whether the checkbox is required. */
    required = input(false, { transform: booleanAttribute });
    /** Whether the checkbox is disabled. */
    disabled = input(false, { transform: booleanAttribute });
    /**
     * Event emitted when the checked state of this radio button changes.
     */
    change = output();
    static ɵfac = function HlmRadioComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HlmRadioComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HlmRadioComponent, selectors: [["hlm-radio"]], inputs: { userClass: [1, "class", "userClass"], id: [1, "id"], ariaLabel: [1, "aria-label", "ariaLabel"], ariaLabelledby: [1, "aria-labelledby", "ariaLabelledby"], ariaDescribedby: [1, "aria-describedby", "ariaDescribedby"], value: [1, "value"], required: [1, "required"], disabled: [1, "disabled"] }, outputs: { change: "change" }, ngContentSelectors: _c1, decls: 3, vars: 9, consts: [[3, "change", "id", "value", "required", "disabled", "aria-label", "aria-labelledby", "aria-describedby"]], template: function HlmRadioComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "brn-radio", 0);
            i0.ɵɵlistener("change", function HlmRadioComponent_Template_brn_radio_change_0_listener($event) { return ctx.change.emit($event); });
            i0.ɵɵprojection(1, 0, ["indicator", ""]);
            i0.ɵɵprojection(2, 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMap(ctx._computedClass());
            i0.ɵɵproperty("id", ctx.id())("value", ctx.value())("required", ctx.required())("disabled", ctx.disabled())("aria-label", ctx.ariaLabel())("aria-labelledby", ctx.ariaLabelledby())("aria-describedby", ctx.ariaDescribedby());
        } }, dependencies: [BrnRadioComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HlmRadioComponent, [{
        type: Component,
        args: [{
                selector: 'hlm-radio',
                standalone: true,
                imports: [BrnRadioComponent],
                template: `
    <brn-radio
      [id]="id()"
      [class]="_computedClass()"
      [value]="value()"
      [required]="required()"
      [disabled]="disabled()"
      [aria-label]="ariaLabel()"
      [aria-labelledby]="ariaLabelledby()"
      [aria-describedby]="ariaDescribedby()"
      (change)="change.emit($event)"
    >
      <ng-content select="[target],[indicator]" indicator />
      <ng-content />
    </brn-radio>
  `,
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HlmRadioComponent, { className: "HlmRadioComponent", filePath: "lib/hlm-radio.component.ts", lineNumber: 33 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGxtLXJhZGlvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdWkvdWktcmFkaW9ncm91cC1oZWxtL3NyYy9saWIvaGxtLXJhZGlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLFNBQVMsRUFDVCxRQUFRLEVBQ1IsS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0MsT0FBTyxFQUFrQixpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7O0FBd0JsRixNQUFNLE9BQU8saUJBQWlCO0lBQ1osU0FBUyxHQUFHLEtBQUssQ0FBYSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM1RCxjQUFjLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUN2QyxHQUFHLENBQ0Qsb0dBQW9HLEVBQ3BHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDakIsQ0FDRixDQUFDO0lBRUYsd0RBQXdEO0lBQ3hDLEVBQUUsR0FBRyxLQUFLLENBQXFCLFNBQVMsQ0FBQyxDQUFDO0lBRTFELDBFQUEwRTtJQUMxRCxTQUFTLEdBQUcsS0FBSyxDQUFxQixTQUFTLEVBQUU7UUFDL0QsS0FBSyxFQUFFLFlBQVk7S0FDcEIsQ0FBQyxDQUFDO0lBRUgsK0VBQStFO0lBQy9ELGNBQWMsR0FBRyxLQUFLLENBQXFCLFNBQVMsRUFBRTtRQUNwRSxLQUFLLEVBQUUsaUJBQWlCO0tBQ3pCLENBQUMsQ0FBQztJQUVILGdGQUFnRjtJQUNoRSxlQUFlLEdBQUcsS0FBSyxDQUFxQixTQUFTLEVBQUU7UUFDckUsS0FBSyxFQUFFLGtCQUFrQjtLQUMxQixDQUFDLENBQUM7SUFFSDs7T0FFRztJQUNhLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFLLENBQUM7SUFFNUMsd0NBQXdDO0lBQ3hCLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQztJQUV6RSx3Q0FBd0M7SUFDeEIsUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBRXpFOztPQUVHO0lBQ2EsTUFBTSxHQUFHLE1BQU0sRUFBcUIsQ0FBQzsyR0F6QzFDLGlCQUFpQjs2REFBakIsaUJBQWlCOztZQWhCMUIsb0NBVUM7WUFEQyx5R0FBVSx1QkFBbUIsSUFBQztZQUU5Qix3Q0FBc0Q7WUFDdEQscUJBQWM7WUFDaEIsaUJBQVk7O1lBWFYsbUNBQTBCO1lBTTFCLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSxBQUZBLDZCQUFXLHNCQUVNLDRCQUNNLDRCQUNBLCtCQUNHLHlDQUNVLDJDQUNFOzRCQVZoQyxpQkFBaUI7O2lGQWtCaEIsaUJBQWlCO2NBckI3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7R0FlVDthQUNGOztrRkFDWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBib29sZWFuQXR0cmlidXRlLFxuICBDb21wb25lbnQsXG4gIGNvbXB1dGVkLFxuICBpbnB1dCxcbiAgb3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGhsbSB9IGZyb20gJ0BzcGFydGFuLW5nL2JyYWluL2NvcmUnO1xuaW1wb3J0IHsgQnJuUmFkaW9DaGFuZ2UsIEJyblJhZGlvQ29tcG9uZW50IH0gZnJvbSAnQHNwYXJ0YW4tbmcvYnJhaW4vcmFkaW8tZ3JvdXAnO1xuaW1wb3J0IHsgQ2xhc3NWYWx1ZSB9IGZyb20gJ2Nsc3gnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdobG0tcmFkaW8nLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQnJuUmFkaW9Db21wb25lbnRdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxicm4tcmFkaW9cbiAgICAgIFtpZF09XCJpZCgpXCJcbiAgICAgIFtjbGFzc109XCJfY29tcHV0ZWRDbGFzcygpXCJcbiAgICAgIFt2YWx1ZV09XCJ2YWx1ZSgpXCJcbiAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZCgpXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZCgpXCJcbiAgICAgIFthcmlhLWxhYmVsXT1cImFyaWFMYWJlbCgpXCJcbiAgICAgIFthcmlhLWxhYmVsbGVkYnldPVwiYXJpYUxhYmVsbGVkYnkoKVwiXG4gICAgICBbYXJpYS1kZXNjcmliZWRieV09XCJhcmlhRGVzY3JpYmVkYnkoKVwiXG4gICAgICAoY2hhbmdlKT1cImNoYW5nZS5lbWl0KCRldmVudClcIlxuICAgID5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlt0YXJnZXRdLFtpbmRpY2F0b3JdXCIgaW5kaWNhdG9yIC8+XG4gICAgICA8bmctY29udGVudCAvPlxuICAgIDwvYnJuLXJhZGlvPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBIbG1SYWRpb0NvbXBvbmVudDxUID0gdW5rbm93bj4ge1xuICBwdWJsaWMgcmVhZG9ubHkgdXNlckNsYXNzID0gaW5wdXQ8Q2xhc3NWYWx1ZT4oJycsIHsgYWxpYXM6ICdjbGFzcycgfSk7XG4gIHByb3RlY3RlZCBfY29tcHV0ZWRDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgaGxtKFxuICAgICAgJ2dyb3VwIFsmLmJybi1yYWRpby1kaXNhYmxlZF06dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBydGw6c3BhY2UteC1yZXZlcnNlJyxcbiAgICAgIHRoaXMudXNlckNsYXNzKClcbiAgICApXG4gICk7XG5cbiAgLyoqIFVzZWQgdG8gc2V0IHRoZSBpZCBvbiB0aGUgdW5kZXJseWluZyBicm4gZWxlbWVudC4gKi9cbiAgcHVibGljIHJlYWRvbmx5IGlkID0gaW5wdXQ8c3RyaW5nIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuXG4gIC8qKiBVc2VkIHRvIHNldCB0aGUgYXJpYS1sYWJlbCBhdHRyaWJ1dGUgb24gdGhlIHVuZGVybHlpbmcgYnJuIGVsZW1lbnQuICovXG4gIHB1YmxpYyByZWFkb25seSBhcmlhTGFiZWwgPSBpbnB1dDxzdHJpbmcgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCwge1xuICAgIGFsaWFzOiAnYXJpYS1sYWJlbCcsXG4gIH0pO1xuXG4gIC8qKiBVc2VkIHRvIHNldCB0aGUgYXJpYS1sYWJlbGxlZGJ5IGF0dHJpYnV0ZSBvbiB0aGUgdW5kZXJseWluZyBicm4gZWxlbWVudC4gKi9cbiAgcHVibGljIHJlYWRvbmx5IGFyaWFMYWJlbGxlZGJ5ID0gaW5wdXQ8c3RyaW5nIHwgdW5kZWZpbmVkPih1bmRlZmluZWQsIHtcbiAgICBhbGlhczogJ2FyaWEtbGFiZWxsZWRieScsXG4gIH0pO1xuXG4gIC8qKiBVc2VkIHRvIHNldCB0aGUgYXJpYS1kZXNjcmliZWRieSBhdHRyaWJ1dGUgb24gdGhlIHVuZGVybHlpbmcgYnJuIGVsZW1lbnQuICovXG4gIHB1YmxpYyByZWFkb25seSBhcmlhRGVzY3JpYmVkYnkgPSBpbnB1dDxzdHJpbmcgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCwge1xuICAgIGFsaWFzOiAnYXJpYS1kZXNjcmliZWRieScsXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgdGhpcyByYWRpbyBidXR0b24gcmVwcmVzZW50cy5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSB2YWx1ZSA9IGlucHV0LnJlcXVpcmVkPFQ+KCk7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGNoZWNrYm94IGlzIHJlcXVpcmVkLiAqL1xuICBwdWJsaWMgcmVhZG9ubHkgcmVxdWlyZWQgPSBpbnB1dChmYWxzZSwgeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSk7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGNoZWNrYm94IGlzIGRpc2FibGVkLiAqL1xuICBwdWJsaWMgcmVhZG9ubHkgZGlzYWJsZWQgPSBpbnB1dChmYWxzZSwgeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSk7XG5cbiAgLyoqXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgY2hlY2tlZCBzdGF0ZSBvZiB0aGlzIHJhZGlvIGJ1dHRvbiBjaGFuZ2VzLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGNoYW5nZSA9IG91dHB1dDxCcm5SYWRpb0NoYW5nZTxUPj4oKTtcbn1cbiJdfQ==